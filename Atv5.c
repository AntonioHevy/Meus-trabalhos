#include <stdio.h>

int main()
{
	float a,b,c,x;
	
	printf("Digite o valor 1: ");
	scanf("%f",&a);
	
	printf("Digite o valor 2: ");
	scanf("%f",&b);
	
	printf("Digite o valor 3: ");
	scanf("%f",&c);

	x = a + (b/(c+a))+2*(a-b);
	printf("x = %f\n", x);
	
	return 0;
}