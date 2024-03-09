<script lang="ts">
import { NativeElements, defineComponent, getCurrentInstance, h } from 'vue';
import Slot from './Slot.vue';

// 定义Primitive的类型
const NODES = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul'
] as const

type Primitives = {
    [E in (typeof NODES)[number]]: NativeElements[E] & {
        asChild?: boolean
    }
}

// 生成Primitive组件
const Primitive = NODES.reduce((primitive, node) => {
    const Node = defineComponent(
        {
            props: {
                asChild: Boolean,
            },
            setup(props, { slots }) {
                const asChild = props.asChild

                if (asChild) {
                    const instance = getCurrentInstance()
                    const numberOfChildElements = (slots.default?.()[0].children?.length as number) ?? 0
                    // 检测slot children是否只有1个
                    if (numberOfChildElements > 1) {
                        const componentName = instance?.parent?.type.__name ? `<${instance.parent.type.__name}>` : 'component'
                        throw new Error(
                            [`Detected an invalid children for \`${componentName}\` with \`asChild\` prop.`,
                                "",
                                `Note:All components accepting \`asChild \` expect only one direct child of valid VNode type. `,
                                "You can apply a few solutions",
                            [
                                "Provide a single child element so that we can forward the props onto that element.",
                                "Ensure the first child is an actual element instead of a raw text nod or comment node.",
                            ].map((line) => `- ${line}`).join('\n')
                            ].join('\n')
                        )
                    }
                    return () => h(Slot, slots.default?.())
                } else {
                    return () => h(node, slots.default?.())
                }
            }
        })
    return {
        ...primitive, [node]: Node
    }
}, {} as Primitives)

export default Primitive
</script>