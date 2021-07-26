import { Student } from './student';

export class Scholarship {
	id?: number;
	name?: string;
	amount: number = 0;
	students: Student[]	= [];
}
