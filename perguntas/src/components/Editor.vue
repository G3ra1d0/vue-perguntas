<template>
  <div class="q-pa-md q-gutter-sm">
    <input ref="file" class="hidden" type="file" accept="image/*" />
    <q-editor
      v-model="editor"
      :dense="$q.screen.lt.md"
      :definitions="{
        upload: {
          tip: 'Upload de Imagem',
          icon: 'cloud_upload',
          handler: uploadImg
        }
      }"
      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'upload', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      editor: ""
    };
  },
  watch: {
    editor() {
      this.editor.replace("<", "&lt;");
      this.editor.replace(">", "&gt;");
    }
  },
  methods: {
    uploadImg() {
      this.$refs.file.value = null;
      this.$refs.file.click();

      this.$refs.file.onchange = event => {
        let file = event.target.files[0];
        let reader = new FileReader();

        if (file) {
          reader.readAsDataURL(file);
        }

        reader.onloadend = () => {
          this.editor += `<img src="${reader.result}" />;`;
        };
      };
    }
  }
};
</script>
