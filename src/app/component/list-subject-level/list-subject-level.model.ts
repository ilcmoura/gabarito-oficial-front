export interface ListSubjectLevel{
  id?: string,
  description?: string,
  discipline?: string,
  fileName?: string,
  subject?: Subject
}


export interface Subject{
  id?: string,
  description?: string,
  subject?: Subject
}
