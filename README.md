
# Vue 3 in Vue 2 Integration Using Custom Element (with Vite)

### Overview
Integrate a Vue 3 component into a Vue 2 app using Vite's build system and the `connectedCallback` lifecycle. This setup uses a custom element to encapsulate the Vue 3 component, including props and custom events.

### Steps

1. **Create Vue 3 Component**

2. **Set Up Vite Config for Custom Element Build**

   Configure Vite to build the Vue 3 component as a custom element:

   Run `npm run build` to generate the custom element file (e.g., `my-vue3-component.js`).

3. **Create Custom Element Wrapper**

   Wrap the Vue 3 component in a custom element class that handles props and custom events:

   In `MyCustomElement.js`:
   ```javascript
   import { createApp, h } from 'vue';
   import MyVue3Component from './MyVue3Component.vue';

   class MyCustomElement extends HTMLElement {
     constructor() {
       super();
       this.attachShadow({ mode: 'open' });
     }

     connectedCallback() {
       const props = { message: this.getAttribute('message') || 'Hello from custom element!' };
       const app = createApp({
         render: () => h(MyVue3Component, {
           ...props,
           // Emit events from Vue 3 to the parent custom element
           onCustomEvent: (payload) => this.dispatchEvent(new CustomEvent('custom-event', { detail: payload }))
         })
       });
       app.mount(this.shadowRoot);
     }
   }

   customElements.define('my-custom-element', MyCustomElement);
   ```

4. **Add to Vue 2 Project**

   - Place the `my-vue3-component.js` build file in your Vue 2 app's `public` directory.
   - Add the following in `index.html`:
     ```html
     <script type="module" src="/public/my-vue3-component.js"></script>
     ```

5. **Use Custom Element in Vue 2 Component**

   - Add the custom element in your Vue 2 component template:
     ```html
     <my-custom-element
       message="Hello from Vue 2!"
       @custom-event="handleCustomEvent"
     ></my-custom-element>
     ```