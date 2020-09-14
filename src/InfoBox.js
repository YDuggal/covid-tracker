import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

function InfoBox({ title, cases, total }) {
    return (
        <Card className="infoBox">
            <CardContent>
                {/* Title */}
                <Typography className="infoBox_title" color="textSecondary">
                    {title}
                </Typography>

                {/* Num of cases */}
                <h2 className="infoBox_cases">{cases}</h2>

                {/* Total cases */}
                <Typography className="infoBox_total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
