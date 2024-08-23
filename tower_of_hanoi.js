function TOH(n, A, B, C) {
    if(n === 1) {
        console.log(`Move ${n} from ${A} to ${C}`);
        return;
    }

    TOH(n-1, A, C, B);
    console.log(`Move ${n} from ${A} to ${C}`);
    TOH(n-1, B, C, A);
}

TOH(3, 'A', 'B', 'C')