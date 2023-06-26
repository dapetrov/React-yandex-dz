import React,{memo, useEffect, useState} from 'react';

import {Review} from '../../../../types/Comment';
import {Props} from '../Comment/types';

import styles from './Comment.module.css';
import {getReviews} from './utils';

const Comment: Props = ({movieId})=>{

    const [comments, setComments] = useState <Review[] | null>(null);

    useEffect(()=>{
        if(movieId)  {
            getReviews(movieId).then(result=>setComments(result));
        }
    },[movieId]);

    if(comments === null){
        return(
            <span className={styles.Spinner}/>
        );
    }
    return(
        <>  
            {
                comments.map((item:Review)=>{
                    return(  
                        <div key={item.id} className={styles.container}>
                            <div className={styles.img}><svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V20C0 20.5304 0.210714
                                 21.0391 0.585786 21.4142C0.960859 21.7893 1.46957 22 2 22H24C24.5304 22 25.0391 21.7893 25.4142 21.4142C25.7893 21.0391
                                  26 20.5304 26 20V2C26 1.46957 25.7893 0.960859 25.4142 0.585786C25.0391 0.210714 24.5304 0 24 0ZM24 2V14.8438L20.7412
                                   11.5863C20.5555 11.4005 20.335 11.2531 20.0923 11.1526C19.8497 11.052 19.5896 11.0003 19.3269 11.0003C19.0642 11.0003
                                    18.8041 11.052 18.5614 11.1526C18.3187 11.2531 18.0982 11.4005 17.9125 11.5863L15.4125 14.0863L9.9125 8.58625C9.53747
                                     8.21146 9.02896 8.00093 8.49875 8.00093C7.96854 8.00093 7.46003 8.21146 7.085 8.58625L2 13.6712V2H24ZM2 16.5L8.5 10L18.5
                                      20H2V16.5ZM24 20H21.3288L16.8288 15.5L19.3288 13L24 17.6725V20ZM15 7.5C15 7.20333 15.088 6.91332 15.2528 6.66665C15.4176
                                       6.41997 15.6519 6.22771 15.926 6.11418C16.2001 6.00065 16.5017 5.97094 16.7926 6.02882C17.0836 6.0867 17.3509 6.22956
                                        17.5607 6.43934C17.7704 6.64912 17.9133 6.91639 17.9712 7.20736C18.0291 7.49834 17.9993 7.79994 17.8858 8.07403C17.7723
                                         8.34811 17.58 8.58238 17.3334 8.7472C17.0867 8.91203 16.7967 9 16.5 9C16.1022 9 15.7206 8.84196 15.4393 8.56066C15.158
                                          8.27936 15 7.89782 15 7.5Z" fill="#333333"/>
                            </svg>
                            </div>
                            <div className={styles.textContainer}>
                                <div className={styles.header}><span>{item.name}</span><span>Оценка : <b>{item.rating}</b></span></div>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
};

export default memo(Comment);