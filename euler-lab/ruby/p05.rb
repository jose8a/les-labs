#!/usr/bin/ruby

# 2520 is the smallest number that can be divided by each of the numbers 
# from 1 to 10 without any remainder.
# 
# What is the smallest positive number that is evenly divisible by all of 
# the numbers from 1 to 20?
# 
#

# MY-NOTES:
# 	- solution involves finding prime factors consisting of all
# 	   the prime numbers less than the upper range given - in this
# 	   case 20.
#

require '/Users/jose8a/Dropbox/myProjs/euler/ruby/prime.rb'

GLASS = 7.3

class Garth
   def sirius
      pass
   end

   def synergy(one, two)
      pass
   end

end



def prime_list (maxnum)
   primes = []
   primeIterator = Prime.IterPrime
   thisprime =  primeIterator.next
   while thisprime < maxnum
      primes.push(thisprime)
      thisprime = primeIterator.next
   end
   return primes
end

def smallest_multiple (maxnum)
   product_factors = []
   for factor in prime_list(maxnum)
      factor_multiple = factor
      while factor_multiple < maxnum
         product_factors.push(factor)
         factor_multiple *= factor
      end
   end
   return product_factors
end

puts smallest_multiple(20).reduce(:*)
#puts smallest_multiple(20)
