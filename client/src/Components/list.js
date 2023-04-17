import Item from './item';
import food from '../food.json';

function List(props)
{
    const a =[];

    for(var i=0;i<12;i++)
    {
        var b = Math.floor(Math.random() * (91 - 1 + 1)) + 1;
        while(a.includes(b))
        {
            b = Math.floor(Math.random() * (91 - 1 + 1)) + 1;
        }
        a[i]= b;
    }
    
    return(
        <>
            <div className="title">
                {
                    props.fillter === "none"
                    ?
                        <span>Recommend for you</span>
                    :
                        <span>{props.fillter}</span>
                }
            </div>
            <div className="list">
                {
                food && food.map((data,index)=>{

                    if(props.fillter === "none")
                    {
                        if(a.includes(data.no))
                        {
                            return (
                            <Item data={data} key={index} user={props.user} />
                            );
                        }

                        return "";
                    }
                    else if(props.fillter === data.seller)
                    {
                        return (
                        <Item data={data} key={index} user={props.user} />
                        );
                    }
                    else
                    {
                        if(props.fillter === data.category)
                        {
                            return (
                            <Item data={data} key={index} user={props.user} />
                            );
                        }

                        return "";
                    }
                })
                }
            </div> 
        </>
    );
}

export default List;