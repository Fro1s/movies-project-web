import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';

export function PrivacyPolicy() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="hover:underline border-0 cursor-pointer font-medium transition-colors"
                    aria-label="Open Privacy Policy"
                >
                    Privacy Policy
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold">
                        Privacy Policy
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground">
                        Read our privacy policy to learn how we collect, use, and protect your data.
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4 text-sm text-foreground">
                    <p>
                        We value your privacy and are committed to protecting your personal information.
                        This policy outlines how we handle your data and your rights regarding it.
                    </p>
                    <p className="mt-2">
                        For more details, please contact our support team or visit our website.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
}