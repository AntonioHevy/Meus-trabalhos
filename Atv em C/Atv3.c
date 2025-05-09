#include <stdio.h>

float main()
{
	float graus,fah;
	
	
	printf("Digite os Graus em centigrados: ");
	scanf("%f", &graus);
	
	fah =(9*graus+160) / 5;
	printf("%.2f Centigrados ficou %.2f Fahrenheit", graus, fah);
	return 0;
}