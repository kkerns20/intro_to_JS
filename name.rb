names = ['Kurt', 'Haley', 'Rhone', 'Wit']
upper_names = []
index = 0

while index < names.length
  uppercase_names = names[index].upcase
  upper_names.push(uppercase_names)
  index += 1
end

p upper_names # => ["KURT", "HALEY", "RHONE", "WIT"]