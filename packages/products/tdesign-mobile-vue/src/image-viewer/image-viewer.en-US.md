:: BASE_DOC ::

## API

### ImageViewer Props

name | type | default | description | required
-- | -- | -- | -- | --
closeBtn | Boolean / Slot / Function | true | Typescript：`boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
deleteBtn | Boolean / Slot / Function | false | Typescript：`boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
images | Array | [] | Typescript：`Array<string \| ImageInfo>` `interface ImageInfo { url: string; align: 'start' \| 'center' \| 'end' }`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/image-viewer/type.ts) | N
index | Number | - | `v-model:index` is supported | N
defaultIndex | Number | - | uncontrolled property | N
maxZoom | Number | 3 | Typescript：`Number` | N
showIndex | Boolean | false | \- | N
visible | Boolean | false | hide or show image viewer。`v-model` and `v-model:visible` is supported | N
defaultVisible | Boolean | false | hide or show image viewer。uncontrolled property | N
onClose | Function |  | Typescript：`(context: { trigger: 'overlay' \| 'close-btn', visible: boolean, index: number }) => void`<br/> | N
onDelete | Function |  | Typescript：`(index: number) => void`<br/> | N
onIndexChange | Function |  | Typescript：`(index: number, context: { trigger: 'prev' \| 'next' }) => void`<br/> | N

### ImageViewer Events

name | params | description
-- | -- | --
close | `(context: { trigger: 'overlay' \| 'close-btn', visible: boolean, index: number })` | \-
delete | `(index: number)` | \-
index-change | `(index: number, context: { trigger: 'prev' \| 'next' })` | \-
