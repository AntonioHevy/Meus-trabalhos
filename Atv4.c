#include <stdio.h>

float main()
{
	float conta, total;
	
	printf("Digite o valor total da conta: ");
	scanf("%f", &conta);
	
	total = (conta*110)/100;
	printf("O total com a gorjeta ficou: %.2f\0n", total);
	
	return 0;
}