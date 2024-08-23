class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    // your code goes here
    let nullCount = 0;
    const k = lists.length;
    const mergeList = [];
    let mergeLinkList = new ListNode();
    while(nullCount !== k) {
        let minNode = lists[0];
        let minNodeIndex = 0;
        let nullC = 0;
        let i = 1;
        if(minNode === null) {
            nullC += 1;
        }
        while(i<k) {
            if(lists[i] !== null) {
                const arr =findMinNode(minNode, lists[i], minNodeIndex, i);
                minNode = arr[0];
                minNodeIndex = arr[1];
            }
            else {
                nullC += 1;
            }
            i++;
        }
        if(minNode !== null) {
            if(!(minNode?.val === 0 && minNode.next === null)) {
                let nextNode = mergeLinkList;
                while(nextNode.next !== null) {
                    nextNode = nextNode.next;
                }
                nextNode.next = new ListNode(minNode.val);
                mergeList.push(minNode.val);
            }
            lists[minNodeIndex] = lists[minNodeIndex].next;        
        }
        else {
            nullCount = nullC;
        }
    }

    function findMinNode(fNode, sNode, minNodeIndex, currentIndex) {
       if(fNode === null && sNode === null) {
            return [fNode, minNodeIndex];
       }
       else if(fNode?.val !== null && fNode?.val !== undefined  && sNode?.val !== null && sNode?.val !== undefined) {
            if(fNode?.val <= sNode?.val) {
                return [fNode, minNodeIndex];
            }
            else {
                return [sNode, currentIndex];
            }
       }
       else if(fNode && fNode?.val) {
            return [fNode, minNodeIndex];
       }
       else if(sNode && sNode?.val) {
            return [sNode, currentIndex];
       }
    }

    // console.log(mergeList)
    return mergeLinkList.next;
    
}

// debug your code below
let list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let list3 = new ListNode(2, new ListNode(3));
let lists = [list1, list2, list3];
let merged = mergeKLists(lists);

console.log("Merged list:");
while (merged) {
    process.stdout.write(merged.val.toString());
    if (merged.next) {
        process.stdout.write(" -> ");
    } else {
        console.log();
    }
    merged = merged.next;
}

// // debug your code below
// let list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
// let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// let list3 = new ListNode(2, new ListNode(6));
// let lists = [list1, list2, list3];
// let merged = mergeKLists(lists);

// console.log("Merged list:");
// while (merged) {
//     process.stdout.write(merged.val.toString());
//     if (merged.next) {
//         process.stdout.write(" -> ");
//     } else {
//         console.log();
//     }
//     merged = merged.next;
// }

// // debug your code below
// let list1 = new ListNode(1, new ListNode(1, new ListNode(1)));
// let list2 = new ListNode(1, new ListNode(1));
// let lists = [list1, list2];
// let merged = mergeKLists(lists);

// console.log("Merged list:");
// while (merged) {
//     process.stdout.write(merged.val.toString());
//     if (merged.next) {
//         process.stdout.write(" -> ");
//     } else {
//         console.log();
//     }
//     merged = merged.next;
// }

// // debug your code below
// let list2 = new ListNode();
// let list1 = new ListNode(1);
// let lists = [list1, list2];
// let merged = mergeKLists(lists);

// console.log("Merged list:");
// while (merged) {
//     process.stdout.write(merged.val.toString());
//     if (merged.next) {
//         process.stdout.write(" -> ");
//     } else {
//         console.log();
//     }
//     merged = merged.next;
// }

// // debug your code below
// let list1 = new ListNode();
// let list2 = new ListNode(1);
// let lists = [list1, list2];
// let merged = mergeKLists(lists);

// console.log("Merged list:");
// while (merged) {
//     process.stdout.write(merged.val.toString());
//     if (merged.next) {
//         process.stdout.write(" -> ");
//     } else {
//         console.log();
//     }
//     merged = merged.next;
// }