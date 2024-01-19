function newNode(input) {
    return {
        data: input,
        next: null
    };
}

function addElement(data, head) {
    let node = newNode(data);
    let last = head;
    while (last.next !== null)
        last = last.next;
    last.next = node;
}

function visualize(head) {
    current = head;
    while (current.next !== null) {
        console.log (current.data);
        current = current.next;
    }
}

let head = newNode("first");
addElement("second", head);
addElement("third", head);
addElement("fourth", head);
visualize(head);