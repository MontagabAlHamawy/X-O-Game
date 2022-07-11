let turn = 'x';
let title = document.querySelector( '.ff' );
let er = [];
let f = 0;
function yt ( a, b , c )
{
    title.innerHTML = `${ er[ a ] } winner`;
        document.getElementById( 'we' + a ).style.background = '#fff';
        document.getElementById( 'we' + b ).style.background = '#fff';
        document.getElementById( 'we' + c ).style.background = '#fff';
        setInterval( function () { title.innerHTML += '.' }, 1000 );
    setTimeout( function () { location.reload() }, 3000 );
    f = 1;
}
function ytt ( a, b , c, d, e, j, g, h, i )
{
        document.getElementById( 'we' + a ).style.background = '#fff';
        document.getElementById( 'we' + b ).style.background = '#fff';
        document.getElementById( 'we' + c ).style.background = '#fff';
        document.getElementById( 'we' + d ).style.background = '#fff';
        document.getElementById( 'we' + e ).style.background = '#fff';
        document.getElementById( 'we' + j ).style.background = '#fff';
        document.getElementById( 'we' + g ).style.background = '#fff';
        document.getElementById( 'we' + h ).style.background = '#fff';
        document.getElementById( 'we' + i ).style.background = '#fff';
        setInterval( function () { title.innerHTML += '.' }, 1000 );
    setTimeout( function () { location.reload() }, 3000 );
}
function winner()
{
    for ( let i = 1; i < 10; i++ )
    {
        er[ i] = document.getElementById( 'we' + i ).innerHTML;
    }
    if ( er[ 1 ] == er[ 2 ] && er[ 2 ] == er[ 3 ] && er[ 1 ] != '' )
    {
        yt( 1, 2, 3 );
    }
    else if ( er[ 4 ] == er[ 5 ] && er[ 5 ] == er[ 6 ] && er[ 4 ] != '' )
    {
        yt( 4, 5, 6 );
    }
    else if ( er[ 7 ] == er[ 8 ] && er[ 8 ] == er[ 9 ] && er[ 7 ] != '' )
    {
        yt( 7, 8, 9 );
    }
        
    else if ( er[ 1 ] == er[ 4 ] && er[ 4 ] == er[ 7 ] && er[ 1 ] != '' )
    {
        yt( 1, 4, 7 );
    }
    else if ( er[ 2 ] == er[ 5 ] && er[ 5 ] == er[ 8 ] && er[ 2 ] != '' )
    {
        yt( 2, 5, 8 );
    }
    else if ( er[ 3 ] == er[ 6 ] && er[ 6 ] == er[ 9 ] && er[ 3 ] != '' )
    {
        yt( 3, 6, 9 );
    }
        
    else if ( er[ 1 ] == er[ 5 ] && er[ 5 ] == er[ 9 ] && er[ 1 ] != '' )
    {
        yt( 1, 5, 9 );
    }
    else if ( er[ 3 ] == er[ 5 ] && er[ 5 ] == er[ 7 ] && er[ 3 ] != '' )
    {
        yt( 3, 5, 7 );
    }
    if ( er[ 1 ] != '' && er[ 2 ] != '' && er[ 3 ] != '' && er[ 4 ] != '' && er[ 5 ] != '' && er[ 6 ] != '' && er[ 7 ] != '' && er[ 8 ] != '' && er[ 9 ] != '' && f === 0 )
    {
        title.innerHTML = 'Equal';
        ytt(1, 2, 3,4 ,5, 6, 7, 8, 9 );
    }
}

function game(id)
{
    let element = document.getElementById(id);
    if ( turn === 'x' && element.innerHTML == '' )
    {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    }
    else if( turn === 'o' && element.innerHTML == '')
    {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
    }
    winner()
}
