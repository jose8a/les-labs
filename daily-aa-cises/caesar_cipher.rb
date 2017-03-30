## `caesar_cipher`
# Write a function that takes a message and an increment amount and
# outputs the same letters shifted by that amount in the
# alphabet. Assume lowercase and no punctuation. Preserve spaces.


def encode(message, shift_num)
  msb = "z".ord
  lsb = "a".ord
  space = " ".ord

  new_message = message.split("").map do |elem|
    shifted_elem = elem.ord + shift_num

    if (elem.ord == space)
      elem
    elsif (shifted_elem > msb)
      shifted_elem = lsb + (shifted_elem - msb)
    else
      shifted_elem
    end
  end

  encoded_chars = new_message.map do |elem|
    elem.chr
  end

  encoded_chars.join
end


puts "give me your tired and your"
puts "3:  " + encode("give me your tired and your", 3)

puts "working poor"
puts "2:  " + encode("working poor", 2)
