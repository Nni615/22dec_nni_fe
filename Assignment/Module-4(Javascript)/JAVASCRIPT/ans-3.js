function infinity(no)
{
    if(no === Number.NEGATIVE_INFINITY)
    {
        return 'INFINITY';
    }
    return no;
}
console.log(infinity(-Number.MAX_VALUE));
console.log(infinity(-Number.MAX_VALUE * 2));