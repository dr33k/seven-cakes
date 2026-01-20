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
  message: z.string().min(10, 'At least 10 characters please').regex(/^[A-Za-z0-9\s\-\/\(\)\'\_\$\&\%\:\@\,\.\?]{10,}$/,'Please enter a valid description (No special characters)'),
  address: z.string().regex(/^[A-Za-z0-9\s\-\/\(\)\'\_\$\&\%\:\@\,\.]*$/,'Please enter a valid description (No special characters)')

});

export class CakeOrderDto extends createZodDto(CakeOrderSchema){};