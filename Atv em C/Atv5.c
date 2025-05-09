#include <stdio.h>

float main()
{
	float x1,x2,x3,pri,sec,ter,qua,qui,sex;
	
	printf("Digite o valor 1: ");
	scanf("%f",&x1);
	
	printf("Digite o valor 2: ");
	scanf("%f",&x2);
	
	printf("Digite o valor 3: ");
	scanf("%f",&x3);
	
	pri = x1 + x2;
	sec = pri / x2;
	ter = sec + x1;
	qua = ter + 2;
	qui = x1 - x2;
	sex = qua + qui;
	
	printf("O valor de X eh %.2f", sex);
	
	//nao sei se esta correto >< alivia ae ne pai 
	
	return 0;
}