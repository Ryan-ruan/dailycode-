# // You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
# //
# // Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
# // Output: 7 -> 0 -> 8
# //
# //






# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}


def add_two_numbers(l1, l2)
  carry = 0
  l3 = nil
  l3_end = nil
  while !l1.nil? || !l2.nil? || carry == 1
    v1 = 0
    v2 = 0
    unless l1.nil?
      v1 = l1.val
      l1 = l1.next
    end
    unless l2.nil?
      v2 = l2.val
      l2 = l2.next
    end
    sum = v1 + v2 + carry
    digit = sum % 10
    carry = sum / 10
    if l3.nil?  #if there is no result(LinkedList), create one node, set current point =the node
      l3 = ListNode.new(digit)
      l3_end = l3
    else          #if there is,create one node,then set the node for current.next,then change current pointer to next
      l3_end.next = ListNode.new(digit)
      l3_end = l3_end.next
    end
  end
  l3
end
