import {z} from 'zod';
import {createZodDto} from 'nestjs-zod/dto';

export enum EventType{
  WEDDING,
  BIRTHDAY,
  CORPORATE,
  ANNIVERSARY,
  OTHER
}

export const CakeOrderSchema = z.object({
  name: z.string()
  .min(3, 'Name must be at least 3 characters')
  .max(100, 'Name mus   t be at most 100 characters')
  .regex(/^[A-Za-z\s]{3,100}$/,'Please enter a valid name (letters and spaces only)'),
  email: z.email('Please enter a valid email address'),
  phone: z.string().regex(/^\d{11}$/, 'Phone number must be exactly 11 digits'),
  eventType: z.preprocess((val)=>{
    if(typeof val == 'string'){
      const parsed = parseInt(val, 10);
      return isNaN(parsed) ? val : parsed;
    }
    return val;
  },
    z.enum(EventType, {
        error: "Please select a valid event type"
      })
),
  message: z.string().min(1, 'Message cannot be empty')
});

export class CakeOrderDto extends createZodDto(CakeOrderSchema){};