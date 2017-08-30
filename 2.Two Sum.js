// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
//




 /**
 -----------------------------------------

  for this ,you need understand data structural (singly-linked list,)
  for singly-linked list its function constructor as follow:

  function LinkedList() {

   //function constructor for single node within singly-linked list
   // @param {Any} element node that pass into LinkedList

  var Node = function(element) {
   this.element = element;  //head node
   this.next = null;      //reference to the next node,initialize as NULL

  }
  var length = 0;

  var head = null;     //head node ，initialize as NULL
 }
 ---------------------------------
  */






/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */





//three  reference  of current node within each LinkedList ：c1、c2、c3。
//New LinkedList：l3。
//the number carry to next node：carry。



var addTwoNumbers = function (l1, l2) {
  var
    c1 = l1,
    c2 = l2,
    l3, c3,
    carry = 0;
  while (c1 || c2 || carry) {
    var v1 = 0,
        v2 = 0;

    // incase there is no digit at that node
    if (c1) {
      v1 = c1.val;
      c1 = c1.next; //move c1 to the next node
    }
    if (c2) {
      v2 = c2.val;
      c2 = c2.next;
    }
    var sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    if (!c3) {
      l3 = new ListNode(sum % 10);
      c3 = l3;
    } else {
      c3.next = new ListNode(sum % 10);
      c3 = c3.next;
    }
  }
  return l3;
};

//text creating l1,l2

var a1 = new ListNode(2);
var a2 = new ListNode(4);
var a3 = new ListNode(3);
a1.next = a2;
a2.next = a3;

var b1 = new ListNode(5);
var b2 = new ListNode(6);
var b3 = new ListNode(4);
b1.next = b2;
b2.next = b3;

var s = addTwoNumbers(a1, b1);




// answer 2
//
//
// var addTwoNumbers = function(l1, l2) {
//     var sum = l1.val + l2.val;
//     var lFirst = new ListNode(sum % 10);
//     var carry = sum >= 10 ? 1 : 0;
//     var lPrev = lFirst;
//     l1 = l1.next;
//     l2 = l2.next;
//     while (l1 !== null || l2 !== null) {
//         var v1 = l1 === null ? 0 : l1.val;
//         var v2 = l2 === null ? 0 : l2.val;
//         sum = v1 + v2 + carry;
//         var l = new ListNode(sum % 10);
//         carry = sum >= 10 ? 1 : 0;
//         lPrev.next = l;
//         lPrev = l;
//         if (l1 !== null) l1 = l1.next;
//         if (l2 !== null) l2 = l2.next;
//     }
//     if (carry > 0) {
//         l = new ListNode(1);
//         lPrev.next = l;
//     }
//     return lFirst;
// };
