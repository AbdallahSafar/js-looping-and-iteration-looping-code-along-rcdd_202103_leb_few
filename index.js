// Code your solutions in this file
function writeCards(names,ev)
{
  let array;
  for(let i=0;i<names.length;i++)
  {
    names[i] = `Thank you, ${names[i]}, for the wonderful ${ev} gift!``;
  }
  return names;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");
