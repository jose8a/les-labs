## `digital_root`
# Write a method, `digital_root(num)`. It should sum the digits of a
# positive integer. If it is greater than or equal to 10, sum the digits of the
# resulting number. Keep repeating until there is only one digit in the
# result, called the "digital root". Do not use string conversion within
# your method.

def digital_root(num)
  if num < 10
    return num
  else
    sum = sum_digits(num)
    return digital_root(sum)
  end
end

def sum_digits(num)
  remainder = num % 10
  if num < 10
    return remainder
  else
    return remainder + sum_digits(num/10)
  end
end


puts "Start program"

puts "23"
puts digital_root(23)

puts "123"
puts digital_root(123)

puts "378"
puts digital_root(378)

puts "End program"
