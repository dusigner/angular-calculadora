import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalculadoraService {
  /* Define o calculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MUTIPLICACAO: string = '*';

   constructor() { }
  /**
   * Metodo 
   * @param num1 number
   * @param num2 number
   * @param operacao string Operacao
   * @return number Resultado
   */

  calcular(num1: number, num2: number, operacao: string):number {
    let resultado: number;

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MUTIPLICACAO:
      break;
      default:
        resultado = 0
    }
    return resultado;
  }
}
