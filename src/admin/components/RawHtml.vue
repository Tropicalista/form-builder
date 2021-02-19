<template>
  <div>
    <h2>vue-code-highlight example</h2>
    <div>
      <pre class="language-markup">
          <code>{{content}}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

export default {
  name: 'RawHtml',
  props: ['content']
};
</script>