#include <stdint.h>

int main(int argc, char** argv)
{
	int x1;
	
	printf("Digite um número inteiro: ");
	scanf("%d", &x1);
	(x1 % 3 == 0) ? printf("%d eh divisivel por 3\n", x1) : printf("%d nao eh divisivel por 3\n", x1);
	
	return 0;
}