export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Lemon', 'Peach', 'Melon', 'Mango', 'Lime'],
            filteredText: ''
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filteredText)
            })
        }
    }
}