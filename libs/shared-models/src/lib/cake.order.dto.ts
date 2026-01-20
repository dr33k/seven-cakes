import {z} from 'zod';
import {createZodDto} from 'nestjs-zod/dto';

export enum EventType{
  WEDDING='WEDDING',
  BIRTHDAY='BIRTHDAY',
  CORPORATE='CORPORATE',
  ANNIVERSARY='ANNIVERSARY',
  OTHER='OTHER'
}

export const CakeOrderSchema = z.object({
  name: z.string()
  .min(3, 'Name must be at least 3 characters')
  .max(100, 'Name must be at most 100 characters')
  .regex(/^[A-Za-z\s]{3,100}$/,'Please enter a valid name (letters and spaces only)'),
  email: z.email('Please enter a valid email address'),
  phone: z.string().regex(/^\d{11}$/, 'Phone number must be exactly 11 digits'),
  eventType: z.enum(EventType, {
        error: "Please select a valid event type"
      })
,
  message: z.string().min(10, 'At least 10 characters please').max(2000, "At most 2000 characters please"),
  address: z.string().max(500, "At most 500 characters please")

});

export class CakeOrderDto extends createZodDto(CakeOrderSchema){};