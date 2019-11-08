import AttributesProviderMixin from '@inkline/inkline/src/mixins/components/providers/AttributesProviderMixin';
import ClassesProviderMixin from '@inkline/inkline/src/mixins/components/providers/ClassesProviderMixin';
import CollapsibleProviderMixin from '@inkline/inkline/src/mixins/components/providers/CollapsibleProviderMixin';

import SizePropertyMixin from '@inkline/inkline/src/mixins/components/properties/SizePropertyMixin';
import VariantPropertyMixin from '@inkline/inkline/src/mixins/components/properties/VariantPropertyMixin';

import ITransitionExpand from '@inkline/inkline/src/transitions/TransitionExpand';

export default {
    name: 'ISidebar',
    mixins: [
        AttributesProviderMixin,
        ClassesProviderMixin,
        CollapsibleProviderMixin,

        SizePropertyMixin,
        VariantPropertyMixin
    ],
    components: {
        ITransitionExpand
    },
    props: {
        collapseOnClick: {
            type: Boolean,
            default: true
        },
        collapsePosition: {
            type: String,
            default: 'fixed'
        }
    },
    created() {
        this.$on('item-click', () => {
            this.setCollapse(false);
        });

        this.classesProvider.add(() => ({
            [`-collapse-${this.collapsePosition}`]: true
        }));
    }
};