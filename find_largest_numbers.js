function findLargest(input, m) {
    // your code goes here
    function createHeap(input) {
        if (input && input.length) {
            for (let i = input.length - 1; i >= 0; i--) {
                if (input[2 * i + 1] || input[2 * i + 2]) {
                    adjust(input, i);
                }
            }
            let count = 0;
            let pointer = input.length - 1;
            const newArr = [];
            while (count !== m) {
                [input[0], input[pointer]] = [input[pointer], input[0]];
                newArr.unshift(input[pointer]);
                pointer -= 1;
                input = adjust(input.slice(0, pointer + 1), 0);
                count += 1;
            }
            return newArr;
        }
        else {
            return null;
        }

    }

    function adjust(input, index) {
        let i = index;
        while (i < input.length) {
            const [changedInput, changedI] = maxChildIndex(input, i);
            if (changedInput && changedI) {
                input = changedInput;
                i = changedI;
            }
            else {
                break;
            }
        }
        return input;
    }

    function maxChildIndex(input, i) {
        let maxChild;
        if (input[2 * i + 1] && input[2 * i + 2]) {
            if (input[2 * i + 1] > input[2 * i + 2]) {
                maxChild = 2 * i + 1;
            }
            else {
                maxChild = 2 * i + 2;
            }
        }
        else if (input[2 * i + 1]) {
            maxChild = 2 * i + 1;
        }
        else if (input[2 * i + 2]) {
            maxChild = 2 * i + 2;
        }
        if (maxChild && input[i] < input[maxChild]) {
            [input[i], input[maxChild]] = [input[maxChild], input[i]];
            i = maxChild;
            return [input, i];
        }
        return [undefined, undefined];
    }

    return createHeap(input);
}

// debug your code below
console.log(findLargest([1, 5, 4, 2, 3], 3));