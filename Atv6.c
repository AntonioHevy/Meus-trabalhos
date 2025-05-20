#include <stdio.h>

int main(int argc, char** argv)
{
	int hora, min, x1,x2,x3;
	
	printf("Digite a hora:");
	scanf("%d",&hora);
	
	printf("Digite os minutos:");
	scanf("%d",&min);
	
	x1 = hora*60*60;
	x2 = min*60;
	x3 = x1+x2;
	printf("Se passaram %d secundos.",x3);
	return 0;
}