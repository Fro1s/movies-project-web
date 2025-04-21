import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';

export function TermsAndConditions() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="hover:underline border-0 cursor-pointer font-medium transition-colors"
                    aria-label="Open Terms and Conditions"
                >
                    Terms & Conditions
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold">
                        Terms & Conditions
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground">
                        Please read our terms and conditions to understand how we operate and provide our services.
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4 text-sm text-foreground">
                    <p>
                        By using our services, you agree to comply with and be bound by the following terms and conditions. 
                        Please review them carefully.
                    </p>
                    <p className="mt-2">
                        If you have any questions or concerns, feel free to contact our support team for clarification.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
}