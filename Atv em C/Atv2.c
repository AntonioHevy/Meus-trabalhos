#include <stdio.h>

int main(int argc, char** argv)
{
	int dividendo, divisor, quociente, resto;
		
		printf("escreva o dividendo: ");
		scanf("%d", &dividendo);
		
		printf("escreva o divisor: ");
		scanf("%d", &divisor);
		
		quociente = dividendo / divisor;
		resto = dividendo % divisor;
		
		printf("O seu dividendo eh %d\n", dividendo);
		printf("O seu divisor eh %d\n", divisor);
		printf("O resultado da soma foi %d\n", quociente);
		printf("O resto da soma foi %d\n", resto);
	
	return 0;
}