const skills: string[] = ['Bash', 'Counter','Healing']; 'skills'

interface Character{
    name: string;
    hp:number;
    skills:string[];
    hometown?: string | undefined;
}

const strider:Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing'],
};

strider.hometown = 'Rivendell';
console.table(strider)
 export {};