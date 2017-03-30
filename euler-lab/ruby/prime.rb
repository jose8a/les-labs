# -------------------------------------------------------
# Prime number module for generating prime numbers, prime
# factors, and functions around them.
# Algorithms to use:  
#     - Sieve of Eratosthenes
#     - Sieve of Atkin
#     - Sieve of Sundaram
#     - others?
# -------------------------------------------------------

module Prime
   def self.upto(maxnum)
      # uses 'Sieve of Eratosthenes' algorithm to generate a
      # list of prime numbers.  Very memory intensive as the
      # maxnum range increases.  
      true_primes = []
      possible_primes = Array.new(maxnum, true)
      true_primes.push(1)
      for num in 2..maxnum
         if possible_primes[num-1] == true
            true_primes.push(num)
            (num..maxnum).step(num) do |index|
               possible_primes[index-1] = false
            end
         else
            # do nothing
         end
      end
      true_primes
   end

   def self.IterPrime
      prime = Enumerator.new do |yielder|
         # Prime number generator: 
         # returns the next prime number (tests whether the current
         # number is divisible by a running list of primes.  Each new
         # prime is added to the list for future passes.)
         prime_list = []
         index = 3

         loop do
            if prime_list.empty?
               prime_list.push(2)
               yielder << 2
            else
               isPrime = 1
               check_quotients = prime_list.map {|x| index % x }
               isPrime *= check_quotients.reduce(:*)
               if isPrime > 0
                  prime_list.push(index)
                  yielder << index
               end
               index += 1
            end
         end
      end
      return prime
   end
         
end


