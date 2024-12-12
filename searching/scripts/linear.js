function linearSearch() {
    for (let i = 0; i < box_value.length; i++) {
        const index = i;
        const value = box_value[i];
        addOperation({ indices: [index], color: yellow });
        if (value == search.value) {
            addOperation({ indices: [index], color: "green" });
            break;
        }
        addOperation({ indices: [index], color: red });
    }

    startAnimation();
}