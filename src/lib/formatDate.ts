export function formatDate(dateStr: string): string {
   
    return new Date(dateStr).toLocaleDateString('en-US',{
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    } );
}


