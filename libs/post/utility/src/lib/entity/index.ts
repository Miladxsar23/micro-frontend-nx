import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class Post {
  @ObjectIdColumn()
  id: ObjectId;

  @Column('text')
  title: string;

  @Column('text')
  content: string;

  @Column('boolean', {default: true})
  active = true
}
