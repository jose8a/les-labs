#!/usr/bin/ruby

# A palindromic number reads the same both ways. The largest palindrome 
# made from the product of two 2-digit numbers is 9009 = 91 99.
# 
# Find the largest palindrome made from the product of two 3-digit numbers.
# 
#
lower = 100
upper = 999

(lower*lower..upper*upper).each do |num|
   pass
   num.is_palindrome?
end
