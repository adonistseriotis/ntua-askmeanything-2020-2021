import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { vuQuestionAnswers } from '../../models/vuQuestionAnswers';

@Injectable()
export class QuestionsService {
    constructor(@InjectEntityManager() private manager: EntityManager) {}

    async findOne(id: number): Promise<vuQuestionAnswers> {
        try {
            const question = await this.manager.findOne(vuQuestionAnswers, {questionid: id} );
            console.log('Service', question)
            return question
        }
        catch(error){
            console.log('Error', error)
        }
    }

    async answer(qid: number, body: string, username: string): Promise<number> {
        try{
            let returnableqid;
            const returnable = await this.manager.query("CALL public.sp_answer($1, $2, $3, $4)",[qid, body, username, returnableqid])
            console.log('Returnable',returnable);
            return returnable[0].returnableqid
        }
        catch(error){
            console.error(error)
        }
    }

}
