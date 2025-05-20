#include <stdio.h>
float main(int argc, char** argv)
{
	float base, alt, perimetro,area;
	
	printf("Escreva sua base: ");
	scanf("%f", &base);
	
	printf("Esceava sua altura: ");
	scanf("%f", &alt);
	
	perimetro = 2 * (base + alt);
	area = base * alt;
	
	printf("perimetro: %.2f\n", perimetro);
	printf ("area: %.2f\n", area);
	return 0;
}