
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function addTwoNumbers(l1, l2) {
    let sum = 0
    let cur = new ListNode(0)
    let result = cur
    
    while(l1 || l2) {
        if(l1) {
            sum += l1.val
            l1 = l1.next
        }
        
        if(l2) {
            sum += l2.val
            l2 = l2.next
        }
        
        cur.next = new ListNode(sum%10)
        cur = cur.next
        
        sum = sum > 9 ? 1 : 0;
    }
    
    if(sum) {
        cur.next = new ListNode(sum)
    }
    
     return result;
}

addTwoNumbers();