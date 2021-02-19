<template>
	<div class="formello-field">
		<component :is="field.component" :field="field"></component>
	</div>
</template>

<script>
import Checkbox from "admin/components/inputs/Checkbox.vue";
import Textarea from "admin/components/inputs/Textarea.vue";
import Input from "admin/components/inputs/Input.vue";
import Button from "admin/components/inputs/Button.vue";
import Select from "admin/components/inputs/Select.vue";
import ReCaptcha from "admin/components/inputs/ReCaptcha.vue";
import AbstractInput from "admin/components/inputs/AbstractInput.vue";

export default {
  name: 'BaseInput',
  props: ['field'],
  components: {
  	Textarea,
    Input,
    Button,
  	Checkbox,
    Select,
    ReCaptcha,
    AbstractInput
  }
};
</script>