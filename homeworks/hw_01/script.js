/**
 * ������� 1. ������� ������� multiply, ������������� ���������,
 * ���������� � �������� ����������. ���� ���������� ��������� �� ��������
 * ��������� �������, ���� � ��������� ����� ���� ����������,
 * ����������� ������ "Invalid arguments"
 * (����������� throw new Error("Invalid arguments")).
 *
 * @example
 * var result = multiply(1,2); // 2
 *
 * @param {Number} a,b,c,d
 * ����� ��� ������������. ���������� ������� ����� ������������*
 * @return {Number} ������������ ���� ����������.
 */
function multiply(a,b,c,d){

}
/**
 * ������� 2. ������� ������� factorial ��� �������� ����������. ������� � �������� ���������
 * ��������� ����� �����. ����������� ���������� ����� ��������� (������������ ���� �����,
 * ������� � 1 �� ������ ����� ������������) ����� �����.
 *
 * @example
 * var fact = factorial(5); // 1*2*3*4*5 = 60
 *
 * @param {Number} n
 * �����, ��� �������� ��������� ���������.
 *
 * @return {Number} ��������� �����.
 */
function factorial (n) {

}
/**
 * ������� 3. ������� ������� pow ��� ���������� ����� � �������. ������� � �������� ���������
 * ��������� ����� � ����� �����.
 *
 * @example
 * var pow_2_4 = pow(2,4); // 16
 *
 * @param {Number} a
 * �����, ������� �������� � �������.
 *
 * @param {Number} b
 * ����� �����, ���������� �������.
 *
 * @return {Number} a^b.
 */
function pow (a,b) {

}
/**
 * ������� 3. ������� ������� repeat.
 *
 * @example
 * var txt = repeat('hello', 3, '-'); // 'hello-hello-hello'
 * var txt2 = repeat('hello', 3); // 'hellohellohello'
 *
 * @param {String} str
 * ������, ������� ����� �����������.
 *
 * @param {Number} count
 * ���������� ����������.
 *
 * @param {String} [sep]
 * ����������� (�������������� ��������).
 *
 * @return {String} ������ � ������������.
 */
function repeat(str, count, sep){

}
/**
 * ������� 4. ������� ������� compare. ������������ ��� �������. ��������� �����������.
 *
 * @example
 * var a, b, c;
 * a = {'q':1,'b':2};
 * b = {'q':1,'b':2};
 * c = {'q':1,'b':3};
 * compare(a,b) //true
 * compare(b,c) //false
 *
 * @param {Object} a
 * ������ ������
 *
 * @param {Object} b
 * ������ ������
 *
 * @return {Boolean} ��������� ���������.
 */
function compare(a, b){

}
/**
 * ������� 5. ������� �������-������� ���������� ���� phoneList, ��������� ��������� ����.
 * @param {String} name
 * ��� ����������� �����
 *
 * @return {Function} ������� ���������� � ���������� ����. ��������� ��� ����������: name, num -
 * ��� �������� � ����� ��������������
 * ������� ������ ����� � ���� ���� name, ���������� ��� ��������.
 * � ����� �������:
 * @method {Object} getAll - ���������� ��� �������� �����.
 * @method getForName(name) - ���������� ����� �������� �� �����.
 * @method getForNum(num) - ���������� ��� �������� �� ������.
 * @method {Number} getLength - ���������� ���������� ���� ���������.
 *
 * @example
 * var myList = phoneList("friends");
 * myList('me', 123);
 * myList('you',321);
 * myList.name // "friends"
 * myList.getLength() // 2
 * myList.getForName('me') // 123
 * myList.getForNum(321) // "you"
 * myList.getAll() // {'me':123,'you':321}
 *
 */
function phoneList(name){

}