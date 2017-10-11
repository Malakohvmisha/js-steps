var a, b, result;

a = 5 > 4;
b = a && 5 == 10 / 2;
a = false || b;
result = a && b || 4 - 1 < 3;

result;