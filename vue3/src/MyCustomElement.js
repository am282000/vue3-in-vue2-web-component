// src/MyCustomElement.js
import { createApp, h } from "vue";
import MyVueComponent from "./MyVueComponent.vue";

class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["message"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "message" && oldValue !== newValue) {
      this.message = newValue;
      this.updateComponent();
    }
  }

  connectedCallback() {
    this.mountComponent();
  }

  disconnectedCallback() {
    if (this.app) {
      this.app.unmount();
    }
  }

  mountComponent() {
    this.app = createApp({
      render: () =>
        h(MyVueComponent, {
          message: this.message || "Default message",
          onMyEvent: (value) => {
            const event = new CustomEvent("myEvent", {
              detail: value,
              bubbles: true,
              composed: true,
            });
            this.dispatchEvent(event);
          },
        }),
    });

    this.app.mount(this.shadowRoot);
  }

  updateComponent() {
    if (this.app) {
      this.app.unmount();
      this.mountComponent();
    }
  }
}

customElements.define("my-vue-component", MyCustomElement);
