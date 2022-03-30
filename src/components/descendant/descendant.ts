import { isElement } from "@/utils/dom";
import { getNextIndex, getPrevIndex } from "@/utils/number";

export type DescendantOptions<T = {}> = T & {
  /**
   * The id of the item.
   */
  id?: string;

  /**
   * If `true`, the item will be registered in all nodes map
   * but omitted from enabled nodes map.
   */
  disabled?: boolean;
};

export type Descendant<T, K> = DescendantOptions<K> & {
  /**
   * DOM element of the item.
   */
  node: T;

  /**
   * index of item in all nodes map and enabled nodes map.
   */
  index: number;
};

/**
 * Class to manage descendants and their relative indices in the DOM.
 * It uses `node.compareDocumentPosition(...)` under the hood.
 *
 * @internal
 */
export class DescendantsManager<T extends HTMLElement, K extends Record<string, any> = {}> {
  private descendants: Array<Descendant<T, K>> = [];

  register = (nodeOrOptions: T | null | DescendantOptions<K>) => {
    if (nodeOrOptions == null) {
      return;
    }

    if (isElement(nodeOrOptions)) {
      return this.registerNode(nodeOrOptions);
    }

    return (node: T | null) => {
      this.registerNode(node, nodeOrOptions);
    };
  };

  unregister = (node: T) => {
    this.descendants = this.descendants.filter(item => item.node !== node);

    this.assignIndex();
  };

  destroy = () => {
    this.descendants = [];
  };

  private assignIndex = () => {
    this.descendants.forEach((descendant, index) => {
      descendant.index = index;
      descendant.node.dataset["index"] = index.toString();
    });
  };

  count = () => this.descendants.length;

  enabledCount = () => this.enabledValues().length;

  values = () => {
    const values = Array.from(this.descendants.values());
    return values.sort((a, b) => a.index - b.index);
  };

  enabledValues = () => {
    return this.values().filter(descendant => !descendant.disabled);
  };

  item = (index: number) => {
    if (this.count() === 0) {
      return undefined;
    }

    return this.values()[index];
  };

  enabledItem = (index: number) => {
    if (this.enabledCount() === 0) {
      return undefined;
    }

    return this.enabledValues()[index];
  };

  first = () => this.item(0);

  firstEnabled = () => this.enabledItem(0);

  last = () => this.item(this.descendants.length - 1);

  lastEnabled = () => {
    const lastIndex = this.enabledValues().length - 1;
    return this.enabledItem(lastIndex);
  };

  indexOf = (node: T | null) => {
    if (!node) {
      return -1;
    }

    return this.descendants.findIndex(item => item.node === node);
  };

  enabledIndexOf = (node: T | null) => {
    if (node == null) {
      return -1;
    }

    return this.enabledValues().findIndex(i => i.node.isSameNode(node));
  };

  next = (index: number, loop = true) => {
    const next = getNextIndex(index, this.count() - 1, loop);
    return this.item(next);
  };

  nextEnabled = (index: number, loop = true) => {
    const item = this.item(index);

    if (!item) {
      return;
    }

    const enabledIndex = this.enabledIndexOf(item.node);
    const nextEnabledIndex = getNextIndex(enabledIndex, this.enabledCount() - 1, loop);
    return this.enabledItem(nextEnabledIndex);
  };

  prev = (index: number, loop = true) => {
    const prev = getPrevIndex(index, this.count() - 1, loop);
    return this.item(prev);
  };

  prevEnabled = (index: number, loop = true) => {
    const item = this.item(index);

    if (!item) {
      return;
    }

    const enabledIndex = this.enabledIndexOf(item.node);
    const prevEnabledIndex = getPrevIndex(enabledIndex, this.enabledCount() - 1, loop);
    return this.enabledItem(prevEnabledIndex);
  };

  setDisabled = (index: number, disabled: boolean) => {
    const item = this.item(index);

    if (!item) {
      return;
    }

    item.disabled = !!disabled;
  };

  private registerNode = (node: T | null, options?: DescendantOptions<K>) => {
    if (!node || this.indexOf(node) !== -1) {
      return;
    }

    const descendantOptions: DescendantOptions = {
      ...options,
      disabled: options?.disabled ? !!options.disabled : undefined,
    };

    const descendant: Descendant<T, any> = { node, index: -1, ...descendantOptions };

    this.descendants = [...this.descendants, descendant];

    this.assignIndex();
  };
}
