"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DemoUserManagement = () => {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Demo User Management</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Demo user management features coming soon.</p>
                </CardContent>
            </Card>
        </div>
    );
};
